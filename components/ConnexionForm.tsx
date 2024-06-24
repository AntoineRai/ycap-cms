"use client";

import React, { useState } from "react";

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
import axios from "axios";
import { useRouter } from "next/navigation";
import { CSR } from "@/config/CSR";

const formSchema = z.object({
  email: z.string().email({ message: "Adresse-mail invalide" }),
  password: z.string().min(4, {
    message: "Le mot de passe ne peut pas être vide",
  }),
});

export function ConnexionForm() {

  const router = useRouter();

  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`${CSR}/user/login`, {
        Mail: values.email,
        Password: values.password,
      })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        if (response.status === 200) {
          router.push("/city");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setError("E-mail ou mot de passe incorrect");
        }
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="mail" placeholder="Adresse-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <p className="text-red-500 font-bold">{error}</p>}
        <Button type="submit" className="w-full rounded-full">
          Connexion
        </Button>
      </form>
    </Form>
  );
}

export default ConnexionForm;
