import { Table } from "antd";

type ICTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
  rowKey?: any;
  expandable?: any;
};

const ICTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
  rowKey,
  expandable,
}: ICTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;
  const getRowClassName = (record: unknown, index: number) => {
    if (index % 2 === 0) {
      return "even-row";
    }
    return "odd-row";
  };
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
      rowKey={rowKey}
      expandable={expandable}
      rowClassName={getRowClassName}
    />
  );
};

export default ICTable;
