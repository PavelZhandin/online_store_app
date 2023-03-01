import React, { useContext, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Pagination } from "flowbite-react";

const Pages = observer(() => {
  const { device } = useContext(Context);
  const [pagesCount, setPagesCount] = useState<any>();

  useEffect(() => {
    setPagesCount(
      Math.ceil(Number(device?.totalCount) / Number(device?.limit))
    );
  }, [device?.totalCount, device?.limit]);
  // const pagesCount = Math.ceil(
  //   (device?.totalCount as number) / (device?.limit as number)
  // );
  return (
    <div>
      <Pagination
        currentPage={Number(device?.page) || 1}
        totalPages={pagesCount || 1}
        onPageChange={(num) => {
          console.log(num);
          if (device) {
            device.page = num;
          }
        }}
      />
    </div>
  );
});

export default Pages;
