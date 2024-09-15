import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "@radix-ui/react-icons"

const CommentCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>

          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p>Code with Botir</p>
          <p>how much work is panding </p>
        </div>
        <Button className="raunded-full" variant="ghost" size="icon">
          <TrashIcon/>
        </Button>
      </div>
    </div>
  )
}

export default CommentCard