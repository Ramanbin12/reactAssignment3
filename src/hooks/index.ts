import { useSelector,useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState,AppDispatch } from '../utilities/type';
export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;