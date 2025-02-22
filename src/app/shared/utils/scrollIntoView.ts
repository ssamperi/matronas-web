import { Router } from "@angular/router";

export const scrollIntoView = async (section: string, router: Router, path?: string) => {
    if (path) {
        // First navigate to the page
        await router.navigate([path]);
        // Wait for navigation and DOM update
        setTimeout(() => {
            const sectionSelected = document.getElementById(section);
            if (sectionSelected) {
                sectionSelected.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        // If we're already on the page, just scroll
        const sectionSelected = document.getElementById(section);
        if (sectionSelected) {
            sectionSelected.scrollIntoView({ behavior: 'smooth' });
        }
    }
}