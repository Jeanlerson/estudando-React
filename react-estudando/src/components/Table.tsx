"use client";


import { useMemo, useState, useEffect } from 'react';
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
  MRT_TableContainer
} from 'material-react-table';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { type Data, fakeData, fakeData as initData } from '@/data/makeData';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Example = () => {

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const { data: fetchedDatas = [], isError: isLoadingDatasError, isFetching: isFetchingDatas, isLoading: isLoadingDatas } = useGetTasks();

  // Estado local para armazenar e atualizar a lista de usuários
  const [data, setData] = useState<Data[]>(fetchedDatas);

  // Sincronizar estado `data` com `fetchedUsers` quando `fetchedUsers` mudar
  useEffect(() => {
    // Verifica se `fetchedUsers` é diferente do `data` antes de atualizar
    if (JSON.stringify(data) !== JSON.stringify(fetchedDatas)) {
      setData(fetchedDatas);
    }
  }, [fetchedDatas, data]);

  const moveUp = (index: number) => {
    if (index <= 0) return;
    const newData = [...fetchedDatas];
    [newData[index - 1], newData[index]] = [newData[index], newData[index - 1]];
    setData(newData);
  };

  const moveDown = (index: number) => {
    if (index >= fetchedDatas.length - 1) return;
    const newData = [...fetchedDatas];
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    setData(newData);
  };

  const columns = useMemo<MRT_ColumnDef<Data>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        enableEditing: false,
        size: 80
      },
      {
        accessorKey: 'task',
        header: 'Tarefa',
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.task,
          helperText: validationErrors?.task,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              tarefa: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: 'cost',
        header: 'Custo(R$)',
        muiEditTextFieldProps: {
          required: true,
          type: 'number',
          error: !!validationErrors?.cost,
          helperText: validationErrors?.cost,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              cost: undefined,
            }),
          inputProps: {
            min: 0
          },
          onBlur: (e) => {
            const value = parseFloat(e.target.value);
            if (isNaN(value) || value <= 0) {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                cost: 'Custo deve ser um número maior que zero.'
              }));
            }
          }
        },
        Cell: ({cell}) => `R$ ${Number(cell.getValue()).toFixed(2)}`
      },
      {
        accessorKey: 'deadline',
        header: 'Data Limite',
        muiEditTextFieldProps: {
          required: true,
          type: 'date',
          error: !!validationErrors?.deadline,
          helperText: validationErrors?.deadline,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              deadline: undefined,
            }),
          onBlur: (e) => {
            const value = e.target.value;
            const date = new Date(value)
            if(isNaN(date.getTime())) {
              setValidationErrors((prevErros) => ({
                ...prevErros,
                deadline: 'Data Limite inválida.'
              }))
            }
          }
        }
      }
    ],
    [validationErrors],
  );

  //call CREATE hook
  const { mutateAsync: createData, isPending: isCreatingData } =
    useCreateTask();
  //call READ hook
  
  //call UPDATE hook
  const { mutateAsync: updateData, isPending: isUpdatingData } =
    useUpdateTask();
  //call DELETE hook
  const { mutateAsync: deleteData, isPending: isDeletingData } =
    useDeleteTask();  
  //CREATE action
  const handleCreateData: MRT_TableOptions<Data>['onCreatingRowSave'] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateTask(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createData(values);
    table.setCreatingRow(null); //exit creating mode
  };

  //UPDATE action
  const handleSaveData: MRT_TableOptions<Data>['onEditingRowSave'] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateTask(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateData(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<Data>) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteData(row.original.id);
    }
  };

  
  const table = useMaterialReactTable({
    autoResetPageIndex: false,
    columns,
    data,
    enableRowOrdering: true,
    enableSorting: false,
    createDisplayMode: 'modal', //default ('row', and 'custom' are also available)
    editDisplayMode: 'modal', //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    positionActionsColumn: 'last',
    enableBottomToolbar: false,
    getRowId: (row) => row.task,
    muiToolbarAlertBannerProps: isLoadingDatasError
      ? {
          color: 'error',
          children: 'Error loading data',
        }
      : undefined,
    muiTableContainerProps: {
      sx: {
        minHeight: '500px'
      }
    },
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateData,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveData,
    
    //optionally customize modal content
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Criar Nova Tarefa</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    //optionally customize modal content
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Editar Tarefa</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),   
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '0.5rem' }}>
        <Tooltip title="Mover para Cima">
          <span>
            <IconButton onClick={() => moveUp(row.index)} disabled={row.index === 0}>
              <ArrowUpwardIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Mover para Baixo">
          <span>
            <IconButton onClick={() => moveDown(row.index)} disabled={row.index === fetchedDatas.length - 1}>
              <ArrowDownwardIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Edit">
          <span>
            <IconButton onClick={() => table.setEditingRow(row)}>
              <EditIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Delete">
          <span>
            <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
              <DeleteIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
    ),

    state: {
      isLoading: isLoadingDatas,
      isSaving: isCreatingData || isUpdatingData || isDeletingData,
      showAlertBanner: isLoadingDatasError,
      showProgressBars: isFetchingDatas,
    },
  });

  return (
    <>
      <MRT_TableContainer table={table} />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          onClick={() => table.setCreatingRow(true)}
        >
          Criar Nova Tarefa
        </Button>
      </Box>
    </>
  );
};

//CREATE hook (post new user to api)
function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (task: Data) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newTaskInfo: Data) => {
      queryClient.setQueryData(
        ['tasks'],
        (prevTasks: Data[]) => {
          const newId = prevTasks.length ? Math.max(...prevTasks.map(task => task.id)) + 1 : 1;

          return [
            ...prevTasks,
            {
              ...newTaskInfo,
              id: newId, // Atribui um novo ID numérico
            },
          ];
        },
      );
    },
  });
}

//READ hook (get users from api)
function useGetTasks() {
  return useQuery<Data[]>({
    queryKey: ['tasks'],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(initData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (task: Data) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newTaskInfo: Data) => {
      queryClient.setQueryData(['tasks'], (prevTasks: any) =>
        prevTasks?.map((prevTask: Data) =>
          prevTask.id === newTaskInfo.id ? newTaskInfo : prevTask,
        ),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (taskId: number) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (taskId: number) => {
      queryClient.setQueryData(['tasks'], (prevTasks: any) =>
        prevTasks?.filter((task: Data) => task.id !== taskId),
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}
//export default Example;

 const queryClient = new QueryClient();

 const ExampleWithProviders = () => (
   //Put this with your other react-query providers near root of your app
   <QueryClientProvider client={queryClient}>
     <Example />
   </QueryClientProvider>
 );

 export default ExampleWithProviders;

const validateRequired = (value: string) => !!value.length;

function validateTask(task: Data) {
  return {
    firstName: !validateRequired(task.task)
      ? 'First Name is Required'
      : '',
    lastName: !validateRequired(task.task) ? 'Last Name is Required' : '',
  };
}