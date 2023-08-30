import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <PaginationItem
            number={number}
            isCurrent={number == 1 ? true : false}
          />
        ))}
      </Stack>
    </Stack>
  );
}
