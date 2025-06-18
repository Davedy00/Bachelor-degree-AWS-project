import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Login | AgriHub+",
  description: "Login to your AgriHub+ account",
}

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/jean-paul-nkeng.png"
            alt="Jean-Paul Nkeng"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-900/90" />
        </div>
        
        {/* Logo - with increased z-index */}
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A+</span>
            </div>
            <span>AgriHub+</span>
          </Link>
        </div>

        {/* Testimonial - with increased z-index */}
        <div className="relative z-20 mt-auto">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Jean-Paul Nkeng</h3>
            <p className="text-sm text-green-100">Agricultural Entrepreneur, Douala</p>
            <blockquote className="space-y-2">
              <p className="text-lg">
                "AgriHub+ has transformed how I manage my agricultural business. The platform's efficiency and network have been invaluable to my success."
              </p>
              <p className="text-sm text-green-200 mt-2">
                Leading agricultural buyer with over 10 years of experience in Cameroon's farming sector
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link href="/register" className="hover:text-brand underline underline-offset-4">
              Don't have an account? Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
