import { menuItems, menuCategories } from "@/app/data/menuData"
import type { MenuItem, MenuCategory } from "@/app/types"

export function getAllCategories(): MenuCategory[] {
    return menuCategories
}

export function getAllDishes(): MenuItem[] {
    return menuItems
}

export function getDishesByCategory(category: string): MenuItem[] {
    if (category === "all") {
        return menuItems
    }
    return menuItems.filter(item => item.category === category)
}

export function getDishBySlug(slug: string): MenuItem | undefined {
    return menuItems.find(item => item.slug === slug)
}