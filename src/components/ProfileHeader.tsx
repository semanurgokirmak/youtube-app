import { HStack, Image, Text, VStack } from "@chakra-ui/react";

type ProfileHeaderProps = {
  profileImage?: string;
  title: string;
  subtitle?: string;
};

export default function ProfileHeader({
  profileImage,
  title,
  subtitle,
}: ProfileHeaderProps) {
  return (
    <HStack mb={4} gap={4}>
      <Image
        src={profileImage}
        alt={title}
        borderRadius="full"
        boxSize="50px"
      />
      <VStack align="start" gap={0}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        {subtitle && (
          <Text fontSize="sm" color="gray.500">
            {subtitle}
          </Text>
        )}
      </VStack>
    </HStack>
  );
}
