"use client";

import React, { useEffect } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Textarea } from "./ui/textarea";
import { CSR } from "@/config/CSR";
import { isExpired } from "@/utils/jwt";

const formSchema = z.object({
  name: z.string().min(1, { message: "Le nom du quartier est requis" }),
  lat: z.string().min(1, { message: "La latitude est requise" }),
  long: z.string().min(1, { message: "La longitude est requise" }),
  description: z.string().min(1, { message: "La description est requise" }),
});

const POIFormUpdate = (id: any) => {
  const router = useRouter();
  let redirect = "/city";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lat: "",
      long: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const latitude = Number(values.lat);
    const longitude = Number(values.long);

    isExpired(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"))

    fetch(`${CSR}/pois/${id.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        id: id,
        Name: values.name,
        Latitude: latitude,
        Longitude: longitude,
        Description: values.description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.push(redirect);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Nom du quartier"
                  {...field}
                  className="w-1/2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-2">
          <FormField
            control={form.control}
            name="lat"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Latitude" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="long"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Longitude" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  {...field}
                  className="w-1/2 max-h-[200px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full w-1/2">
          Modifier un POI
        </Button>
      </form>
    </Form>
  );
};

export default POIFormUpdate;
