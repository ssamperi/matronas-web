export const scrollIntoView = (section: string) => {
    const sectionSelected = document.getElementById(section);
    sectionSelected!.scrollIntoView({behavior: 'smooth'});
} 