"use client";

import React from "react";

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
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { CSR } from "@/config/CSR";
import { isExpired } from "@/utils/jwt";


const formSchema = z.object({
  name: z.string().min(1, { message: "Le nom de la ville est requis" }),
  lat: z.string().min(1, { message: "La latitude est requise" }),
  long: z.string().min(1, { message: "La longitude est requise" }),
  range: z.string().refine(
    (value) => {
      const range = parseFloat(value);
      return range >= 0 && range <= 10;
    },
    { message: "La valeur doit être comprise entre 0 et 10" }
  ),
});

export function CityFormCreate() {

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lat: "",
      long: "",
      range: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const latitude = Number(values.lat);
    const longitude = Number(values.long);
    const reach = Number(values.range);

    isExpired(localStorage.getItem("accessToken"), localStorage.getItem("refreshToken"))

    fetch(`${CSR}/cities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        CityName: values.name,
        Latitude: latitude,
        Longitude: longitude,
        Reach: reach,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.push("/city")
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(values);
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
                  placeholder="Nom de la ville"
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
          name="range"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Rayon"
                  {...field}
                  className="w-1/2"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full w-1/2">
          Ajouter une ville
        </Button>
      </form>
    </Form>
  );
}

export default CityFormCreate;
