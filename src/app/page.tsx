"use client";
import { Box, Container, Divider, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const curse1 = [
  {
    id: 1,
    name: "archar",
    curseVideo: "archar",
    curseDescription: "archar",
    curseQuestion: ["archar[]"],
    task: ["archar[]"],
    img: "/08.jpg",
    rating: 2,
    isMain: 1,
    title: "archar",
    description: "archar",
    updatedAt: "ateTime",
    createdAt: "archar",
  },
  {
    id: 2,
    name: "archar",
    curseVideo: "archar",
    curseDescription: "archar",
    curseQuestion: ["archar[]"],
    task: ["archar[]"],
    img: "/08.jpg",
    rating: 2,
    isMain: 1,
    title: "archar",
    description: "archar",
    updatedAt: "ateTime",
    createdAt: "archar",
  },
  {
    id: 3,
    name: "archar",
    curseVideo: "archar",
    curseDescription: "archar",
    curseQuestion: ["archar[]"],
    task: ["archar[]"],
    img: "/08.jpg",
    rating: 2,
    isMain: 1,
    title: "archar",
    description: "archar",
    updatedAt: "ateTime",
    createdAt: "archar",
  },
  {
    id: 3,
    name: "archar",
    curseVideo: "archar",
    curseDescription: "archar",
    curseQuestion: ["archar[]"],
    task: ["archar[]"],
    img: "/08.jpg",
    rating: 2,
    isMain: 1,
    title: "archar",
    description: "archar",
    updatedAt: "ateTime",
    createdAt: "archar",
  },
  {
    id: 3,
    name: "archar",
    curseVideo: "archar",
    curseDescription: "archar",
    curseQuestion: ["archar[]"],
    task: ["archar[]"],
    img: "/08.jpg",
    rating: 2,
    isMain: 1,
    title: "archar",
    description: "archar",
    updatedAt: "ateTime",
    createdAt: "archar",
  },
];
export default function Home() {
  return (
    <Flex as="main" w="100%" flexWrap={'wrap'} gap='2rem' /* justifyContent={'space-between'} */>
      {curse1.map((curse) => {
        return (
          <Box key={curse.id} maxWidth={"272px"} >
            <Box
              borderRadius="0.5rem 0.5rem 0 0"
              boxShadow="0px 0px 40px rgba(29, 58, 83, 0.15)"
            >
              <Image
                style={{ borderRadius: "0.5rem 0.5rem 0 0" }}
                src={curse.img}
                height={250}
                width={272}
                alt={"08"}
              />
              <Box p="1rem 1rem 0 1rem" bg="white">
                <Text as="h5">
                  <Link
                    fontFamily={"Heebo, sans-serif"}
                    fontSize="calc(1.25625rem + 0.075vw)"
                    fontWeight={700}
                    color="grays.800"
                    href="/"
                  >
                    Next
                  </Link>
                  <Text mb={0.5}>
                    Proposal indulged no do sociable he throwing settling.
                  </Text>
                  <Text
                    color="grays.800"
                    fontFamily="Heebo, sans-serif"
                    fontSize="0.9375rem"
                  >
                    0/5.0
                  </Text>
                </Text>
              </Box>
              <Box p='0 1rem 1rem 1rem' >
                <Divider my='1rem ' borderColor='grays.500'/>
                <Flex justifyContent={'space-between'}>
                  <Box>
                  12h 56m
                  </Box>
                  <Box>
                  15 lectures
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
}
