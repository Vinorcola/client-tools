import { Transition } from "@headlessui/react"
import { createContext, ReactNode, useContext } from "react"
import { toast, resolveValue, Toaster, ToastIcon } from "react-hot-toast"

// oxlint-disable-next-line react-refresh/only-export-components
export function triggerError(error: Error): void {
    console.error(error)
    toast.error(error.message)
}

// oxlint-disable-next-line react-refresh/only-export-components
export function triggerWarning(message: string): void {
    const error = new Error(message)
    console.warn(error)
    toast.error(error.message)
}

interface Notifier {
    error: (error: Error) => void
    warn: (message: string) => void
}

const defaultContextValue: Notifier = {
    error: triggerError,
    warn: triggerWarning,
}

const Context = createContext<Notifier>(defaultContextValue)

export function useNotifier(): Notifier {
    return useContext(Context)
}

interface Props {
    children?: ReactNode
}

export default function NotifierProvider(props: Props) {
    return (
        <Context value={defaultContextValue}>
            <Toaster
                position="top-right"
                toastOptions={{
                    className: "bg-red-400",
                    duration: 10 * 1000, // 10 seconds.
                }}
            >
                {(notification) => (
                    <Transition
                        appear
                        show={notification.visible}
                        enter="transition-all duration-150"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transition-all duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-75"
                    >
                        <div className="transform p-4 flex bg-white rounded shadow-lg">
                            <ToastIcon toast={notification} />
                            <p className="px-2">{resolveValue(notification.message, notification)}</p>
                        </div>
                    </Transition>
                )}
            </Toaster>
            {props.children}
        </Context>
    )
}
