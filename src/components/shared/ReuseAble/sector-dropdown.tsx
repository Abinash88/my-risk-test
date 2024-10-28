import { cn } from "@/lib/utils";
import Popover from "@mui/material/Popover";
import { Button } from "antd";
import { ChevronDown } from "lucide-react";
import React from "react";

const SectorDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        All Sector
        <ChevronDown
          className={cn(anchorEl && "rotate-[180deg]", "transition-all")}
        />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className=""></div>
      </Popover>
    </div>
  );
};

export default SectorDropdown;
