import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import emailjs from "@emailjs/browser"

export default function FooterAnimation() {
  const form = useRef();
  const [message , setMessage]=useState("");
  const [erorrMessage , setErroMessage]=useState("");
  

  const sendEmail= (e)=>{
    e.preventDefault();
       
      emailjs.sendForm(
            'service_jzrwcxq',
            'template_q7qarex',
             form.current,
             'ZPkR47gBF-bFMnrBX'
      ).then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          setErroMessage("Failed to send message. Please try again later.");
        }
      )
       
      
     

  }


  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const bubbles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8,
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      bubbles.forEach((b) => {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fill();

        b.x += b.dx;
        b.y += b.dy;

        // Bounce from edges
        if (b.x + b.radius > width || b.x - b.radius < 0) b.dx *= -1;
        if (b.y + b.radius > height || b.y - b.radius < 0) b.dy *= -1;
      });
      requestAnimationFrame(animate);
    }

    animate();

    // Resize listener
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto py-24 rounded-lg grid grid-cols-2">
        <div className=" space-y-4 max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
            It's time to talk! <br/>Contact me
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground/80 md:text-xl">
            Best way to reach out is <span className="text-gray-400">kishangautam1508@gmail.com</span> or just simply fill out the form below. Don't be shy, I love to talk to new people and make new connections
          </p>

          </div>

          <form ref={form} onSubmit={sendEmail}>
          <div className="max-w-xl grid grid-cols-1 gap-4">
               <div className="grid gap-1.5">
              <Label htmlFor="name">Your Name</Label>
             <Input type="name" name="user_name" placeholder="John" required/>
             </div>
              <div className="grid gap-1.5">
              <Label htmlFor="email">Your Email</Label>
             <Input type="email" name="user_email" placeholder="john@example.com" id="email" required/>
             </div>
             <div className="grid gap-1.5">
             <Label htmlFor="message">Your message</Label>
            <Textarea name="message" placeholder="Type your message here." id="message" required/>
            </div>
            <Button size="lg"  className="h-11 mt-5 animate-bounce border bg-slate-300 text-black ">
              Send me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {
            message && (
              <p className="text-green-500 mt-4">{message}</p>
            )
          }
          {
            erorrMessage && (
              <p className="text-red-500 mt-4">{erorrMessage}</p>
            )
          }
        </form>
       
      </div>
    </section>
  );
}
