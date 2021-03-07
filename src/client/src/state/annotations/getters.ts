import { Annotation } from "../interfaces"
import { State } from "../state"
import { get_compound_id, is_not_deleted } from "./utils"



export function get_all_annotations (state: State): Annotation[]
{
    let all_annotations: Annotation[] = []

    Object.values(state.annotations.annotations_by_safe_user_name)
    .forEach(user_specific_annotations =>
    {
        const annotations = user_specific_annotations!.filter(is_not_deleted)
        all_annotations = all_annotations.concat(annotations)
    })

    return all_annotations
}



export function get_annotation_by_compound_id (state: State, compound_annotation_id: string): Annotation | undefined
{
    return state.annotations.annotations_by_compound_id[compound_annotation_id]
}



export function get_annotation_ids_for_page (state: State, page_number: number)
{
    return (state.annotations.annotations_by_page_number[page_number] || [])
        .map(get_compound_id)
        .join(",")
}



/**
 * This is likely, but not guaranteed to be the id returned by the server
 * If there are two tabs open with the same PDF then conflicting ids will be made.
 * At the moment, conflicting annotations will also be overwritten so the first problem
 * is of no importance.
 */
export function next_annotation_id_for_user (state: State, safe_user_name: string)
{
    const annotations = state.annotations.annotations_by_safe_user_name[safe_user_name]
    return annotations ? annotations.length : 0
}
