import AddAssetForm from '@/components/assets/addAssetForm.client';
import AssetsList from '@/components/assets/assetsList';
import Card from '@/components/card';

const IndexPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row gap-10 w-1/2 min-w-max">
        <Card className="grid items-center align-middle w-1/2 -translate-y-20" header="Add Asset">
          <AddAssetForm />
        </Card>
        <Card className="max-w-md w-3/4 -translate-y-20" header="Assets list">
          <AssetsList />
        </Card>
      </div>
    </div>
  );
};

export default IndexPage;
