import { Message, Inbox, Drafts, BookmarkBorder, People, Apps } from "@material-ui/icons"


export const sidebarItems = [
    {
        icon: <Message />,
        text: 'Thread',
    },
    {
        icon: <Inbox />,
        text: 'All DMs',
    },
    {
        icon: <Drafts />,
        text: 'Mentions and Reactions',
    },
    {
        icon: <BookmarkBorder />,
        text: 'Save Items',
    },
    {
        icon: <People />,
        text: 'Peoples and Groups',
    },
    {
        icon: <Apps />,
        text: 'More',
    }
]

export const sidebarChannels = [
    {
        text: '# Channel 1'
    },
    {
        text: '# Channel 2'
    },
    {
        text: '# Channel 3'
    }
]