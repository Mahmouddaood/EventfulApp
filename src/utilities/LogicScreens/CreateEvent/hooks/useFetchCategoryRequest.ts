import useRequest from '../../../infastructure/Hooks/useRequest'
import CreateEvent from "../../../infastructure/apis/CreateEvent";
import { CategoryRequestProps } from '../interfaces/index.interface';

const {
    getCategories
} = CreateEvent

const useFetchCategoryRequest = (): CategoryRequestProps => {
    const {
        data,
        loading
    }: CategoryRequestProps = useRequest(getCategories)

    return {
        data,
        loading
    }
}

export default useFetchCategoryRequest