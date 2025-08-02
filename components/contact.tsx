"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Upwork logo SVG component
const UpworkLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 102 28"
    className={className}
    fill="currentColor"
    role="img"
    aria-label="Upwork"
  >
    <path d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-3.21,2.65-7,5.38-7a2.33,2.33,0,0,1,2.29,2.54A6,6,0,0,1,28.18,19.06ZM28.3,8.09c-3.67,0-6.43,3.49-7.57,8.59a23.91,23.91,0,0,1-3.78-6.18H14.25v7.17a2.32,2.32,0,1,1-4.64,0V10.5H6.92v7.17a4.25,4.25,0,0,0,8.49,0v-1.2a20.06,20.06,0,0,0,2.86,3.93l-2.43,11.49h3l1.76-8.35a7.86,7.86,0,0,0,4.89,1.77,6.81,6.81,0,0,0,6.89-7.18C32.39,13.3,31,8.09,28.3,8.09ZM42,8.89h-3.5v9.61a3.77,3.77,0,0,1-2.9,1.57,1.66,1.66,0,0,1-1.7-1.76V8.89h-3.5v9.61c0,2.73,1.61,4.44,4.22,4.44a6.11,6.11,0,0,0,4.36-1.87v1.55H42Zm9.26,13.95c-2.79,0-5-2.54-5-5.61s2.24-5.61,5-5.61,5,2.54,5,5.61S54.08,22.84,51.29,22.84Zm0-14.28a8.67,8.67,0,1,0,0,17.33,8.67,8.67,0,1,0,0-17.33ZM78.17,8.89H74.67v9.61a3.77,3.77,0,0,1-2.9,1.57,1.66,1.66,0,0,1-1.7-1.76V8.89h-3.5v9.61c0,2.73,1.61,4.44,4.22,4.44a6.11,6.11,0,0,0,4.36-1.87v1.55h3Zm9.26,13.95c-2.79,0-5-2.54-5-5.61s2.24-5.61,5-5.61,5,2.54,5,5.61S90.23,22.84,87.44,22.84Zm0-14.28a8.67,8.67,0,1,0,0,17.33,8.67,8.67,0,1,0,0-17.33ZM70.35,8.89H65.7V5.47H62.2V8.89h-2.5v3.27h2.5v7.3c0,3.13,1.22,4.79,4.71,4.79a8.93,8.93,0,0,0,3.44-.64V20.35a5.59,5.59,0,0,1-2.39.58c-1.34,0-2.26-.58-2.26-2.38v-6.4h4.65Z" />
  </svg>
);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Send the form data to the contact API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Something went wrong.",
        description: error instanceof Error ? error.message : "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full py-12 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss a potential
              collaboration? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-muted-foreground">rafayzia10@gmail.com</p>
              <Button variant="link" asChild>
                <a href="mailto:rafayzia10@gmail.com">Send an email</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6"
            >
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-muted-foreground">+92 (333) 520-7939</p>
              <Button variant="link" asChild>
                <a href="tel:+923335207939">Call me</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center space-y-2 rounded-lg border p-6 md:col-span-2 lg:col-span-1"
            >
              <div className="rounded-full bg-[#6FDA44]/10 p-3">
                <Image
                  src="/upwork-logo.png"
                  alt="Upwork"
                  width={30}
                  height={30}
                />
              </div>
              <h3 className="text-xl font-bold">Upwork</h3>
              <p className="text-muted-foreground">
                Hire me for your next project
              </p>
              <Button variant="link" asChild>
                <Link
                  href="https://www.upwork.com/freelancers/~016187e6d333d1a266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View Profile
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-3xl mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="text-left">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="text-left">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Subject of your message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="text-left">
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      <Button variant="outline" className="gap-2" asChild>
                        <Link
                          href="https://www.upwork.com/freelancers/~016187e6d333d1a266"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src="/upwork-logo.png"
                            alt="Upwork"
                            width={20}
                            height={20}
                          />
                          Hire Me on Upwork
                        </Link>
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
