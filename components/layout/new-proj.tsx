import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import CreateProject from "@/actions/createProject"
import SubmitProjBtn from "./submit-proj-btn"

const NewProjBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" ml-10 mt-4">
          <Plus className="w-4 h-4 " />
          Create Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={CreateProject}>
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" placeholder="Project Name" />
          <Label htmlFor="url">URL</Label>
          <Input name="url" id="url" placeholder="https://example.com" />
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            id="description"
            placeholder="Description (optional)"
          />
          <SubmitProjBtn />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewProjBtn
