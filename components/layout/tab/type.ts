export type TabLayoutProps = {
    title: string;
    icon: string;
    content: string;
    tabs: string[];
    children: React.ReactNode[];
    leftPosition: string;
};

export type TabMenuProps = {
    tabTitle: string;
    isSelected: boolean;
    isPrevSelected: boolean;
    isNextSelected: boolean;
};

export type PageDescriptionProps = {
    icon: string;
    title: string;
    content: string;
};
