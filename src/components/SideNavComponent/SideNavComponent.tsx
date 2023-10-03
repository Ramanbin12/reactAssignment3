import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
  import { MenuCategories } from "../../utilities/MenuCategories";
  import CloseIcon from "@mui/icons-material/Close";
  import { setShowSideNav } from "../../slices/NavSlice";
  import { useAppDispatch } from "../../hooks";
  import { useNavigate } from "react-router-dom";
  import { ExpandMore } from "@mui/icons-material";
  import { NavLink } from "react-router-dom";
  export const categ = [
    "Women",
    "Men",
    "Mother-Child",
    "Home & Furniture",
    "Super market",
    "Cosmetics",
    "Shoe & Bag",
    "Electronic",
    "Sport & Outdoor",
    "Best seller",
  ];
  
  const SideNavComponent = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return (
      <div className="w-[90%] m-auto xl:hidden flex flex-col gap-[40px] items-start">
        <button className="p-3" onClick={() => dispatch(setShowSideNav(false))}>
          <CloseIcon />
        </button>
        <div className="sidenav w-[100%]">
          {categ.map((item) => {
            return (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                  {/* <Typography> */}
                    <p onClick={()=>{navigate('women');dispatch(setShowSideNav(false))}} className="text-text-color-light-text-selected-category hover:text-yellow-400 text-right font-Lato font-bold text-lg leading-5">
                      {item}
                    </p>
                    {/* <NavLink to="/women/clothes">{item}</NavLink> */}

                  {/* </Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="grid grid-cols-2 sm:grid-cols-3 gap-[30px]">
                    {MenuCategories.map((item) => {
                      return (
                        <div className="flex flex-col gap-[10px]">
                          <div className="font-lato font-bold text-14 leading-20 tracking-wide uppercase">
                            {/* <h3>{item.title}</h3> */}
                            <NavLink to="/women/clothes">{item.title}</NavLink>

                          </div>
                          <div>
                            {item.navArray.map((list) => {
                              return (
                                <p className="font-lato hover:font-bold text-14 font-normal leading-20">
                                  {list}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
          {MenuCategories.map((item) => {
            return (
              <Accordion>
                <AccordionSummary>
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.navArray.map((item) => {
                      return <p>{item}</p>;
                    })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    )
  }
  
export default SideNavComponent
