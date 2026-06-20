import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo({ open }: { open: boolean}) {
  return (
    <Dialog open={open}>
      <DialogContent className="md:max-w-md p-5 bg-[#1c243a] border border-[#223555] shadow-sm rounded-md">
        <DialogHeader>
          <DialogTitle className="text-white">Edit profile</DialogTitle>
          <DialogDescription >
            Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <Label htmlFor="name-1" className="text-white">
              Name
            </Label>
            <Input
              id="name-1"
              name="name"
              defaultValue="Pedro Duarte"
              className="bg-[#1d263f] text-white placeholder:text-muted-foreground border-[#223555]"
            />
          </Field>

          <Field>
            <Label htmlFor="username-1" className="text-white">
              Username
            </Label>
            <Input
              id="username-1"
              name="username"
              defaultValue="@peduarte"
              className="bg-[#1d263f] text-white placeholder:text-muted-foreground border-[#223555]"
            />
          </Field>
        </FieldGroup>

        <DialogFooter className="bg-[#223555] border border-[#223555] rounded-b-md mt-4">
          <DialogClose asChild>
            <Button className="bg-[#1d263f] text-white hover:bg-[#223555] hover:text-white hover:border-3 hover:border-solid hover:border-[#1d263f] cursor-pointer">
              Cancel
            </Button>
          </DialogClose>    

          <Button type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
