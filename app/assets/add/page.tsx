import AddAssetForm from '@/components/assets/addAssetForm.client';
import Card from '@/components/card';
import UserSelect from '@/components/data/userSelect';

const Assets = () => {
  return (
    <div className="flex w-full md:justify-center md:items-center min-w-[28rem] p-10 md:h-full">
      <Card className="max-w-lg flex-grow justify-center" header="Add Asset">
        <AddAssetForm userSelect={<UserSelect />} />
      </Card>
    </div>
  );
};

export default Assets;
