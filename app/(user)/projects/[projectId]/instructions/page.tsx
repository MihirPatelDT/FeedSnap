import CopyBtn from "@/components/layout/copy-btn"
import React from "react"

const page = async  ({ params }: { params: { projectId: string } }) => {

  const {projectId} = await params
  if (!projectId) return <div>Invalid Project ID</div>
  if (!process.env.WIDGET_URL) return <div>Missing WIDGET URL</div>
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg  text-secondary-foreground">
        Embed the code in your site
      </p>

      <div className="bg-blue-950 p-6 rounded-md mt-4 relative">
        <code className="text-white">
          {`<my-widget project-id="${projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn
          text={`<my-widget project="${projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  )
}

export default page
