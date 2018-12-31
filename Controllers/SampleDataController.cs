using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using employeeSystem.Models;
using Sampan;
using System.Collections;
using System.Data;

namespace employeeSystem.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<Item> Products()
        {
            List<Item> vTypeItem = new List<Item>()
            {
                new Item { ItemId = 0, ItemCode = "P0001",ItemName="Demo" },
                 new Item { ItemId = 1, ItemCode = "P0001",ItemName="Demo" },
                  new Item { ItemId = 2, ItemCode = "P0001",ItemName="Demo" },
                   new Item { ItemId = 3, ItemCode = "P0001",ItemName="Demo" },
                    new Item { ItemId = 4, ItemCode = "P0001",ItemName="Demo" },
                     new Item { ItemId = 5, ItemCode = "P0001",ItemName="Demo" }

            };
            IEnumerable<Item> list = (IEnumerable<Item>)vTypeItem.ToList();
            //list = item;
            return list;
        }
        [HttpGet("[action]")]
        public IActionResult CategoryList()
        {
            var msg = ""; string Query = ""; 
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            List<Category> CatList = new List<Category>();
            var CategoryList = CatList; 
            try
            {
               
                Query = "SELECT * FROM tbl_Category";
                IDataReader reader = CoreSQL.CoreSQL_GetReader(Query);
                while (reader.Read())
                {
                    Category aCat = new Category();
                    aCat.id = Convert.ToInt32(reader["CatId"].ToString());
                    aCat.name = reader["CatName"].ToString();
                    CatList.Add(aCat);
                }
                return Json(CategoryList);
            }
            catch (Exception ex)
            {
                msg = ex.Message;
                return Json(msg);
            }
           
        }
        [HttpPost("[action]")]
        public IActionResult Category([FromBody]Category model)
        {
            var msg = "";
            try
            {
                msg = prcSaveDataSampan(model);
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return Json(msg);
        }
        public string prcSaveDataSampan(Category model)
        {
            CoreSQLConnection CoreSQL = new CoreSQLConnection();
            ArrayList arrayList = new ArrayList();
            var Query = "SELECT  cast(Isnull(MAX(CatId),0) + 1 AS float)  AS CatId FROM tbl_Category";
            var variable = CoreSQL.CoreSQL_GetDoubleData(Query);
            try
            {
                var sqlQuery = "Insert Into tbl_Category (CatId,CatName)" +
                               " Values ('" + variable + "','" + model.name + "')";
                arrayList.Add(sqlQuery);
                CoreSQL.CoreSQL_SaveDataUseSQLCommand(arrayList);
                return "Successfully Save.";
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            finally
            {

            }
        }
    }
}
