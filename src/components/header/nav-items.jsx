import React from 'react';
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
    {
        title: "Category 1",
        href: "/docs/primitives/alert-dialog",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        title: "Category 2",
        href: "/docs/primitives/hover-card",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        title: "Category 3",
        href: "/docs/primitives/progress",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        title: "Category 4",
        href: "/docs/primitives/scroll-area",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        title: "Category 5",
        href: "/docs/primitives/tabs",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        title: "Category 6",
        href: "/docs/primitives/tooltip",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
]


const ListItem = (({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    // ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

function NavItems(props) {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Category 1</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
                                <ListItem href="/docs" title="Sub Category 1">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/installation" title="Sub Category 2">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 3">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 4">
                                    Description
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Category 2</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
                                <ListItem href="/docs" title="Sub Category 1">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/installation" title="Sub Category 2">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 3">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 4">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 4">
                                    Description
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Category 3</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
                                <ListItem href="/docs" title="Sub Category 1">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/installation" title="Sub Category 2">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 3">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 4">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 4">
                                    Description
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Category 4</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[300px]">
                                <ListItem href="/docs" title="Sub Category 1">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/installation" title="Sub Category 2">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 3">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 4">
                                    Description
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sub Category 4">
                                    Description
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>More</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default NavItems;