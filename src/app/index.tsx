import { ReactNode, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { IconContext } from "react-icons/lib"
import { BrowserRouter } from "react-router"

import { MenuProvider } from "../components/index.js"
import { initI18n } from "./i18n.js"
import NotifierProvider from "./NotifierProvider.js"
import QueryClientProvider from "./QueryProvider.js"

export { triggerError, triggerWarning } from "./NotifierProvider.js"

export async function init(
    mountElement: HTMLElement,
    defaultLanguage: string,
    menu: ReactNode,
    router: ReactNode,
): Promise<void> {
    await initI18n(defaultLanguage)
    createRoot(mountElement).render(
        <StrictMode>
            <BrowserRouter>
                <IconContext
                    value={{
                        className: "inline shrink-0",
                    }}
                >
                    <NotifierProvider>
                        <QueryClientProvider>
                            <MenuProvider menu={menu}>{router}</MenuProvider>
                        </QueryClientProvider>
                    </NotifierProvider>
                </IconContext>
            </BrowserRouter>
        </StrictMode>,
    )
}
