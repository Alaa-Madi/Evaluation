import WorkAtHaptic from "../components/WorkHaptic/workAtHaptic";

interface WorkHapticProps {
  toggleDrawer: (open: boolean) => (event?: React.KeyboardEvent | React.MouseEvent) => void;
}

const WorkHaptic: React.FC<WorkHapticProps> = ({ toggleDrawer }) => {
  return (
    <div className="w-full h-[80vh]" id="career">
      <WorkAtHaptic toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default WorkHaptic;
