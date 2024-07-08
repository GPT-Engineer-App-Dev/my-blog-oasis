import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const recentPosts = [
    { id: 1, title: "Getting Started with React", date: "2023-03-15", excerpt: "Learn the basics of React and start building your first component." },
    { id: 2, title: "CSS Grid Layout", date: "2023-03-10", excerpt: "Master CSS Grid Layout and create responsive designs with ease." },
    { id: 3, title: "JavaScript ES6 Features", date: "2023-03-05", excerpt: "Explore the powerful features introduced in ECMAScript 6." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-gray-600">Exploring the world of web development, one post at a time.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
          {recentPosts.map((post) => (
            <Card key={post.id} className="mb-4">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
                <Button className="mt-4" variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/placeholder.svg" alt="Author" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
              <p className="mb-4">Passionate about web development and sharing knowledge with the community.</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">GitHub</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;