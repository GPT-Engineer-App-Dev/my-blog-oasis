import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Getting Started with React", date: "2023-03-15", excerpt: "Learn the basics of React and start building your first component." },
    { id: 2, title: "CSS Grid Layout", date: "2023-03-10", excerpt: "Master CSS Grid Layout and create responsive designs with ease." },
    { id: 3, title: "JavaScript ES6 Features", date: "2023-03-05", excerpt: "Explore the powerful features introduced in ECMAScript 6." },
    { id: 4, title: "Introduction to TypeScript", date: "2023-02-28", excerpt: "Discover how TypeScript can enhance your JavaScript development experience." },
    { id: 5, title: "Building RESTful APIs with Node.js", date: "2023-02-20", excerpt: "Learn how to create robust and scalable APIs using Node.js and Express." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <Button variant="outline">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Blog;