import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { userLoginRequest } from "@/appState/slices/authSlice";
import { showToast } from "@/helpers/utilities/showToast";
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  email: z
    .string({
      required_error: "required field",
    })
    .min(1, { message: "required field" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "required field",
    })
    .min(1, { message: "required field" })
    .min(6, { message: "must be more than 6" }),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "candidate@interview.com",
      password: "123456",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    dispatch(
      userLoginRequest({
        baseUrl: "https://dev.minaini.com:2053/r",
        endPoint: "/token",
        body: {
          ...values,
          app_type: "patient",
        },
      })
    ).then((res) => {
      if (!res.payload || !res.payload?.accessToken) {
        showToast("error", "failed request");
      }
    });
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-blue-50 p-8 w-full max-w-sm">
        <p className="text-center mb-6">Login</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
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
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="hover:bg-blue-950"
              type="submit"
              disabled={["pending"].includes(loading)}
            >
              {["pending"].includes(loading) ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
