import Feature from "./feature"

import {
  Layout,
  Wrench,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Headset,
} from "lucide-react"

const features = [
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing tools and services.",
    icon: <Layout />,
  },
  {
    title: "Customizable",
    description: "Customize FeedSnap. to fit your needs and preferences.",
    icon: <Wrench />,
  },
  {
    title: "Analytics",
    description: "Track and analyze feedback to make informed decisions.",
    icon: <BarChart3 />,
  },
  {
    title: "Secure",
    description: "Your data is safe and secure with FeedSnap.",
    icon: <ShieldCheck />,
  },
  {
    title: "Scalable",
    description: "Grow your business with FeedSnap. as you scale.",
    icon: <TrendingUp />,
  },
  {
    title: "Fast Support",
    description: "Get help when you need it with our fast support team.",
    icon: <Headset />,
  },
]

export const FeatureSection = () => {
  return (
    <section className="container mx-auto max-w-screen-xl px-4 my-24 flex items-center flex-col">
      <h2 className="mb-6 text-2xl font-bold">Features</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
