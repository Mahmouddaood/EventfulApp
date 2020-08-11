import { NavigationProps } from '../../utilities/generalInterface'
import { ProfileDataProps } from '../MainProfile/partials/Profile/index.interface'
import { UserProfile, InterestProps, CData } from '../../utilities/LogicScreens/Profile/interfaces/index.interface'
export default interface EditProfileProps extends NavigationProps {
}


export interface EditSectionProps {
    // handleMultiSelect?: (item: string | InterestProps | CData) => void,
    // onDeleteItem?: (item: InterestProps) => void,
    dataParams?: UserProfile | any,
    // countries?: CData[]
}