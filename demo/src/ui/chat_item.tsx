import {
    Card,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

type ChatItemProps = {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
};

function Chat_Item({ title, subtitle, icon, onClick }: ChatItemProps) {
    return (
        <Card
            className='min-w-50 items-start gap-1 border-none hover:bg-popover cursor-pointer'
            onClick={onClick}
        >
            <CardTitle className='flex gap-1 text-left font-normal text-sm px-3'>
                {icon}
                {title}
            </CardTitle>
            {subtitle && <CardDescription className="px-3">{subtitle}</CardDescription>}
        </Card>
    )
}

export default Chat_Item;