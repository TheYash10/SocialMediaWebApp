import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        // title="Authentication"
        size="55%"
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form className="infoForm">
          <h3>Your info</h3>
          <div>
            <input
              type="text"
              className="infoInput"
              name="firstName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="infoInput"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="Works at"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              name="LivesIn"
              placeholder="Lives in"
            />
            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />
          </div>
          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="RelationShip Status"
            />
          </div>

          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}

export default ProfileModel;
