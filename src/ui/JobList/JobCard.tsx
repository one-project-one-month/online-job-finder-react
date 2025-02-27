import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Shield } from "lucide-react"

const JobCard = () => {
  return (
    <div className="container">
    <Card className="my-6">
      <CardHeader className="flex flex-row justify-between items-center ">
        <CardTitle className="text-center">Create project</CardTitle>
        <Button variant='outline' type="button"><Shield /></Button>
      </CardHeader>
      <CardContent>
        <CardTitle>UI Designer</CardTitle>
        <CardDescription>Senior Designer</CardDescription>
        <div className="pt-5 flex flex-wrap gap-2 items-center">
      <Button type='button' variant='secondary'>
        Design
      </Button>
      <Button type='button' variant='secondary'>
        Full Time
      </Button>
      <Button type='button' variant='secondary'>
         Senior Designer
      </Button>
    </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>25 mins ago</CardDescription>
        <Button>Apply</Button>
      </CardFooter>
    </Card>
    <Card className="my-6">
      <CardHeader className="flex flex-row justify-between items-center ">
        <CardTitle className="text-center">Create project</CardTitle>
        <Button variant='outline' type="button"><Shield /></Button>
      </CardHeader>
      <CardContent>
        <CardTitle>UI Designer</CardTitle>
        <CardDescription>Senior Designer</CardDescription>
        <div className="pt-5 flex flex-wrap gap-2 items-center">
      <Button type='button' variant='secondary'>
        Design
      </Button>
      <Button type='button' variant='secondary'>
        Full Time
      </Button>
      <Button type='button' variant='secondary'>
         Senior Designer
      </Button>
    </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription>25 mins ago</CardDescription>
        <Button>Apply</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default JobCard