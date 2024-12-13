import { Card } from "@/components/ui/card";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  return (
    <Center className="flex items-center justify-center h-3/4">
      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>

        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
      <Card size="md" variant="elevated" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
    </Center>
  );
}
