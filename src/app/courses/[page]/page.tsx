"use client";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from "react";

const curses = [
  {
    id: 1,
    name: "Введення в цифровий маркетинг (3 лекції)",
    coursesPages: [
      {
        id: 3,
        name: "вступ",
      },
      {
        id: 3,
        name: "Що таке nest",
      },
    ],
  },
];

export default function Page() {
  const pathname = usePathname();
  return (
    <Container pt="3rem ">
      <Heading as="h2" mb="1.5rem">
        Курс Next js
      </Heading>

      <Heading
        as="h3"
        fontSize={"1.875rem"}
        borderRadius={"0.5rem 0.5rem 0  0"}
        border="1px"
        borderColor="grays.300"
        padding={"1rem"}
      >
        Навчальний план
      </Heading>

      {curses.map((cur) => {
        return (
          <Box
            key={cur.id}
            border="1px"
            borderTop={"0"}
            padding={"1rem"}
            borderColor="grays.300"
          >
            <Heading as="h4" fontSize={"1.3125rem"} mb="1.6rem ">
              Введення в цифровий маркетинг (3 лекції)
            </Heading>
            {cur.coursesPages.map((curse) => {
              return (
                <>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Flex alignItems={"center"} gap="1rem">
                      <Link
                        display={"block"}
                        color="reds.100"
                        backgroundColor="reds.200"
                        height="40px"
                        width="40px"
                        lineHeight="40px"
                        borderRadius="50%"
                        textAlign="center"
                        href="/"
                        _hover={{
                          color: "white",
                          backgroundColor: "reds.100",
                          borderColor: "reds.100",
                          transition: "all ease-out 0.2s",
                        }}
                      >
                        <ArrowForwardIcon fontWeight="900" fontSize={"20px"} />
                      </Link>

                      <Heading as="h6" fontSize="0.9375rem">

                        {curse.name}
                      </Heading>
                    </Flex>
                    <Link
                      bg="greens.100"
                      color="white"
                      fontSize="0.8125rem"
                      py="0.4rem"
                      px="0.8rem"
                      borderRadius={"0.2rem"}
                      href={`${pathname}/${curse.id}`}
                      _hover={{
                        backgroundColor: "greens.200",
                        borderColor: "greens.2000",
                        transition: "all ease-out 0.2s",
                      }}
                    >
                      дивитися
                    </Link>
                  </Flex>
                  <Divider borderColor="grays.500" opacity="0.25" my="1rem" />
                </>
              );
            })}
          </Box>
        );
      })}
    </Container>
  );
}
