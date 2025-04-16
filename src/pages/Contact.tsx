import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Here you would typically send the form data to your server
    alert("Thank you for your message! We'll get back to you soon.");
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-64 w-full bg-gray-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="/lovable-uploads/cf33956a-fc58-4800-95f0-0d92f66fa6eb.png"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start px-12">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="container-custom py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below with details of your program, question, or
            booking request. We'll reply straight away, and we can call you back
            if you'd like! Our telephone lines are open Monday-Friday 9am-5pm
            (GMT+1).
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message here..."
                        className="h-32"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
              >
                Send
              </Button>
            </form>
          </Form>
        </div>

        {/* Right Side - Map and Contact Info */}
        <div className="space-y-6">
          <div className="h-64 bg-gray-200 rounded">
            {/* Map placeholder - in a real scenario, you'd add a Google Map or similar here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0537060394904!2d106.82676607681268!3d-6.2518656937975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3bcf94bd44d%3A0x371a32d643d1d967!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1681548056608!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">City</p>
              <p className="font-medium">Yogyakarta, Indonesia</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium">info@travelaja.com</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-medium">+62 812 3456 7890</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Office</p>
              <p className="font-medium">10 AM - 8 PM</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-2">CALL US DIRECTLY AT</h3>
            <p className="text-3xl font-bold text-primary">+124 4537 9756</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto"></div>
    </div>
  );
};

export default Contact;
