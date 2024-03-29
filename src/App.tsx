import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpen = () => {
      setTimeout(() => {
        setOpen(true)
      }, 5000);
    };

    handleOpen()
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            PROPAGANDA
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            cumque amet fugit, quidem blanditiis eum incidunt dolor provident
            quis possimus mollitia ratione tempore laboriosam animi, id iusto,
            quae laudantium repellat?
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
