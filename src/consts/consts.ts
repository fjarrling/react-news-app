import {getTotalPagesCount} from "@/utils/utils.ts";

export const TOTAL_RESULTS = 99
export const PAGE_SIZE = 9
export const TOTAL_PAGES = getTotalPagesCount(PAGE_SIZE, TOTAL_RESULTS)