import cx from "@vinorcola/utils/classNames"
import { t } from "i18next"
import type { ReactNode } from "react"

interface Props {
    id: string
    title: string
    optional?: boolean
    children: ReactNode
}

export default function FormLine(props: Props) {
    return (
        <tr className="even:[&>th]:bg-table-line-title-even odd:[&>th]:bg-table-line-title-odd even:[&>td]:bg-table-line-even odd:[&>td]:bg-table-line-odd hover:bg-table-line-hover">
            <th className="w-3xs">
                <label htmlFor={props.id} className={cx(props.optional && "font-normal")}>
                    {props.title}
                    {props.optional || (
                        <span className="ml-1 text-red-500" title={t("global.requiredField")}>
                            *
                        </span>
                    )}
                </label>
            </th>
            <td className="p-0!">
                <div className="h-full flex flex-col">
                    {/* <div className="bg-red-200 text-error px-4 py-2">Error message</div> */}
                    {props.children}
                </div>
            </td>
        </tr>
    )
}
