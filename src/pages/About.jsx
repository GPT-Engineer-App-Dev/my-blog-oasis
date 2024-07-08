import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Node.js", "Express", "MongoDB", "Git"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Bio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Hi, I'm John Doe, a passionate web developer with over 5 years of experience in creating
              responsive and user-friendly web applications. I love exploring new technologies and sharing
              my knowledge through this blog.
            </p>
            <p>
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or
              experimenting with new recipes in the kitchen.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Skills & Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Interests</h3>
              <ul className="list-disc list-inside">
                <li>Open Source Contribution</li>
                <li>Web Accessibility</li>
                <li>UI/UX Design</li>
                <li>Tech Writing</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;