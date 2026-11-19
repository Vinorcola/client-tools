import DynamicTable from "@vinorcola/dynamic-table"
import type {
    ClickableProps,
    ControllerButtonsGroupProps,
    FooterContainerProps,
    Props,
} from "@vinorcola/dynamic-table/DefaultTheme"
import type { JSX } from "react"
import { Link } from "react-router"

import { InlineLoader } from "../Loader.js"

DynamicTable.ControllerContainer = function ControllerContainer(props: ControllerButtonsGroupProps) {
    return (
        <div className="absolute top-0 -right-6">
            <ul className="flex flex-col-reverse justify-end">
                <li>{props.filterButton}</li>
                <li>{props.sortButton}</li>
                <li>{props.columnButton}</li>
            </ul>
            {props.columnPopup}
        </div>
    )
}

DynamicTable.BodyContainer = function BodyContainer(props: Props) {
    return <tbody className="bg-section">{props.children}</tbody>
}

DynamicTable.ClickableCell = function ClickableCell(props: ClickableProps) {
    return (
        <td className="p-0!">
            <Link to={props.target} className="block size-full px-4 py-2">
                {props.children}
            </Link>
        </td>
    )
}

DynamicTable.FooterContainer = function FooterContainer(props: FooterContainerProps) {
    return (
        <tfoot>
            <tr className="bg-transparent">
                <td className="relative py-0! px-16 h-9 text-center" colSpan={props.totalColums}>
                    {props.pageSelector}
                    {props.itemsPerPageSelector}
                </td>
            </tr>
        </tfoot>
    )
}

DynamicTable.Loader = InlineLoader as unknown as () => JSX.Element

export default DynamicTable
