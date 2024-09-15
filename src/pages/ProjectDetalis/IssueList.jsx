import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IssueCard } from "./IssueCard";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from '@/components/ui/dialog'; 
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { CreateIssueForm } from './CreateIssueForm';

export const IssueList = () => {
  const issues = [
    { id: 1, title: "Issue 1" },
    { id: 2, title: "Issue 2" },
    { id: 3, title: "Issue 3" }
  ];

  return (
    <div className="flex flex-col w-full max-w-sm md:max-w-md lg:max-w-lg h-full p-4 bg-gray-700 shadow-md rounded-md">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-center text-lg font-bold text-gray-100">Issue List</CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto p-4 h-[calc(100%-4rem)]">
          <div className="space-y-2">
            {issues.map((issue) => (
              <IssueCard key={issue.id} title={issue.title} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger>
              <Button variant="outline" className="w-full border flex items-center gap-2">
                <PlusIcon /> Create Issue
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Issue</DialogTitle>
              </DialogHeader>
              {/* Dialog tarkibi */}
              <CreateIssueForm />
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};
