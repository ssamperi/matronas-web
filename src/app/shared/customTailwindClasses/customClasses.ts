export const customClasses = {
    MOBILE_DISPLAY: 'sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden',
    SM_DISPLAY:'hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden',
    MD_DISPLAY:'hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden',
    LG_DISPLAY:'hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden',
    XL_DISPLAY:'hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden',
    XXL_DISPLAY:'hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block',
    SECTION_TITLE : 'text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-primary-purple',
    AIPAP_TITLES: 'text-lg text-primary font-normal',
    AIPAP_ARTICLES: 'flex flex-col mt-4 leading-loose gap-1 max-w-prose',
    AIPAP_LI: 'pt-2 pb-2',
    AIPAP_UL: 'list-disc list-outside text-left pl-3'
} as const;