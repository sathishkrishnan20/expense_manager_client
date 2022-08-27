import {
    Card,
    CardContent,
    CardHeader,
    Container,
  } from '@mui/material';
import { Table } from '../../../components'
import ExpenseCategoryAdd from './add'
const Categories = [{
    categoryId: 1,
    categoryName: 'Cement',
},
{
    categoryId: 2,
    categoryName: 'Online Spends'
},
{
    categoryId: 3,
    categoryName: 'Engagment'
}]
export default function ExpenseCategories() {
    return (
        <Container>
            
             <ExpenseCategoryAdd />
            <Card className="mb-4">
                <CardHeader title="Categories"></CardHeader>
                <CardContent>
                    <Table 
                        headers={[ {
                            name: 'Category Id',
                            node: 'categoryId',
                        },
                        {
                            name: 'Category Name',
                            node: 'categoryName',
                        }]}
                        rows={Categories}
                    />
                </CardContent>
            </Card>
        </Container>
    )
}