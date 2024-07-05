import { useNode } from "@craftjs/core";
import { Modal, Box } from "@mui/material";
import React from "react";

const TextComponent = ({ text }) => {
  const {
    isClicked,
    connectors: { drag, connect },
    actions: { setProp },
  } = useNode((state) => ({
    isClicked: state.events.selected,
  }));

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(isClicked);
  }, [isClicked]);

  const handleClose = () => setOpen(false);

  return (
    <div ref={(dom) => connect(drag(dom))}>
      <h2>{text}</h2>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <input
            type="text"
            value={text}
            onChange={(e) =>
              setProp((props) => ({ ...props, text: e.target.value }))
            }
          />
        </Box>
      </Modal>
    </div>
  );
};

export default TextComponent;
