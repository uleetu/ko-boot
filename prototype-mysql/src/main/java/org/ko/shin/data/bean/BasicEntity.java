package org.ko.prototype.data.bean;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.Version;
import lombok.Data;

import java.io.Serializable;

@Data
public class BasicEntity implements Serializable {

    /**
     * 数据状态：0-有效，1-删除
     */
    @TableLogic
    @TableField(select = false)
    private short disable;

    /**
     * 更新版本
     */
    @Version
    private Long version;

    /**
     * 创建用户
     */
    @TableField(value = "create_user", fill = FieldFill.INSERT)
    private Long createUser;

    /**
     * 创建时间
     */
    @TableField(value = "gmt_create", fill = FieldFill.INSERT)
    private java.util.Date gmtCreate;

    /**
     * 更新用户
     */
    @TableField(value = "modified_user", fill = FieldFill.UPDATE)
    private Long modifiedUser;

    /**
     * 更新时间
     */
    @TableField(value = "gmt_modified", fill = FieldFill.UPDATE)
    private java.util.Date gmtModified;


}
